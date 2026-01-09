import { useEffect, useRef, useState } from "react"

export default function ImageModal({ images = [], initialIndex = 0, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const [visible, setVisible] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    // mount animation
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length)
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length)
    }
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length])

  if (!images || images.length === 0) return null

  const handleClose = () => {
    setVisible(false)
    // wait for transition before unmounting
    closeTimer.current = setTimeout(() => onClose && onClose(), 220)
  }

  const next = (e) => {
    e.stopPropagation()
    setIndex((i) => (i + 1) % images.length)
  }

  const prev = (e) => {
    e.stopPropagation()
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "opacity 200ms ease",
        opacity: visible ? 1 : 0,
        background: "rgba(0,0,0,0.75)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "80vw",
          maxHeight: "80vh",
          width: "auto",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: visible ? "scale(1)" : "scale(0.98)",
          transition: "transform 220ms ease, opacity 200ms ease",
          opacity: visible ? 1 : 0,
        }}
      >
        <button
          onClick={prev}
          aria-label="Previous"
          style={{
            position: "absolute",
            left: 8,
            background: "rgba(0,0,0,0.35)",
            border: "none",
            color: "white",
            fontSize: 28,
            cursor: "pointer",
            height: 40,
            width: 40,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ‹
        </button>

        <img
          src={images[index]}
          alt={`image-${index + 1}`}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: 6,
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            objectFit: "contain",
          }}
        />

        <button
          onClick={next}
          aria-label="Next"
          style={{
            position: "absolute",
            right: 8,
            background: "rgba(0,0,0,0.35)",
            border: "none",
            color: "white",
            fontSize: 28,
            cursor: "pointer",
            height: 40,
            width: 40,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ›
        </button>

        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: -12,
            right: -12,
            background: "rgba(0,0,0,0.35)",
            border: "none",
            color: "white",
            fontSize: 18,
            cursor: "pointer",
            height: 32,
            width: 32,
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>
      </div>
    </div>
  )
}
