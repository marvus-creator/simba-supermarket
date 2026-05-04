import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function CartModal({ cart, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (closeRef.current) {
      closeRef.current.focus()
    }
  }, [])

  const total = cart.reduce((sum, item) => sum + item.priceRwf, 0)
  const formattedTotal = new Intl.NumberFormat('en-RW', {
    style: 'currency',
    currency: 'RWF'
  }).format(total)

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        width: '90%',
        maxWidth: '500px',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}>
        <h2 style={{ marginBottom: '16px', color: '#1a7a4a' }}>🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p style={{ color: '#666' }}>Your cart is empty!</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: '1px solid #eee'
              }}>
                <span>{item.name}</span>
                <span style={{ color: '#1a7a4a', fontWeight: 'bold' }}>
                  {new Intl.NumberFormat('en-RW', { style: 'currency', currency: 'RWF' }).format(item.priceRwf)}
                </span>
              </div>
            ))}
            <div style={{
              marginTop: '16px',
              fontWeight: 'bold',
              fontSize: '18px',
              color: '#1a7a4a'
            }}>
              Total: {formattedTotal}
            </div>
          </>
        )}
        <button
          ref={closeRef}
          onClick={onClose}
          style={{
            marginTop: '20px',
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            width: '100%'
          }}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  )
}

export default CartModal