import React, { useState, useRef, useEffect } from 'react';

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.18)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 8px 32px #4069fd33',
    padding: '2rem',
    minWidth: 320,
    maxWidth: 420,
    width: '90vw',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    zIndex: 1001,
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#274B63',
    marginBottom: 8,
    textAlign: 'center',
  },
  textarea: {
    width: '100%',
    padding: 14,
    borderRadius: 8,
    border: '1.5px solid #b3c6e0',
    resize: 'vertical',
    fontSize: '1.1rem',
    minHeight: 70,
    background: '#f7faff',
    color: '#222',
    fontFamily: 'inherit',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 8,
  },
  cancelBtn: {
    background: '#eee',
    border: 'none',
    borderRadius: 6,
    padding: '7px 18px',
    cursor: 'pointer',
    fontWeight: 500,
    color: '#4069fd',
    fontSize: '1rem',
    transition: 'background 0.2s',
  },
  submitBtn: {
    background: 'linear-gradient(90deg, #4069fd 0%, #274B63 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '7px 22px',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: '0 2px 8px #4069fd22',
    transition: 'background 0.2s',
  },
};

function CreatePost({ onCreate, onClose, initialContent = '', isEdit = false }) {
  const [content, setContent] = useState(initialContent);
  const textareaRef = useRef(null);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onCreate({
      id: isEdit ? undefined : Date.now(),
      author: 'Sean Etienne',
      content,
      date: new Date().toLocaleString(),
    });
    setContent('');
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <form
        style={styles.card}
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmit}
        aria-label={isEdit ? 'Edit post form' : 'Create post form'}
      >
        <div style={styles.heading}>{isEdit ? 'Edit Post' : 'Create a Post'}</div>
        <textarea
          ref={textareaRef}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="What's on your mind?"
          rows={4}
          style={styles.textarea}
          aria-label="Post content"
        />
        <div style={styles.actions}>
          <button type="button" style={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button type="submit" style={styles.submitBtn}>{isEdit ? 'Update' : 'Post'}</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost; 