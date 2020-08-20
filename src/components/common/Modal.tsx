import React from "react";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  title: string;
  desc: string;
  onClose: () => void;
}

function Modal(props: Props) {
  const { onClose } = props;
  const modal = useRef<React.ReactNode | null>(null);
  const closeButton = useRef<React.ReactElement<HTMLDivElement> | null>(null);

  const handleKeyTrap = e => {
    if (!modal.current) {
      return;
    }
    const focusableNode = modal.current.querySelectorAll(
      "[href], [tabindex], button, input, textarea, select"
    );

    const focusableFirstNode = focusableNode[0];
    const focusableLastNode = focusableNode[focusableNode.length - 1];

    const isFocusableFirstNode = Object.is(e.target, focusableFirstNode);
    const isFocusableLastNode = Object.is(e.target, focusableLastNode);

    if (e.keyCode === 9 && e.shiftKey && isFocusableFirstNode) {
      e.preventDefault();
      focusableLastNode.focus();
    }
    if (e.keyCode === 9 && !e.shiftKey && isFocusableLastNode) {
      e.preventDefault();
      focusableFirstNode.focus();
    }
  };

  useEffect(() => {
    document.body.classList.add("overflowHidden");
    window.addEventListener("keydown", handleKeyTrap);
    closeButton.current && closeButton.current.focus();

    return () => {
      document.body.classList.remove("overflowHidden");
      window.removeEventListener("keydown", handleKeyTrap);
    };
  }, [closeButton]);

  return createPortal(
    <div className="dimmed">
      <article ref={modal}>
        <header>
          <p>{props.title}</p>
        </header>
        <section>
          <p>{props.desc}</p>
        </section>
        <footer>{props.children}</footer>
        <button className="closeButton" onClick={onClose} ref={closeButton}>
          X
        </button>
      </article>
    </div>,
    document.body
  );
}

Modal.defaultProps = {
  onClose: () => {}
};

export default Modal;
