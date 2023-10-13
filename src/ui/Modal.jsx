function Modal({ children }) {
  return (
    <div className="dark:bg-dark-primary-700 fixed inset-0 z-40 flex h-full items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      {children}
    </div>
  );
}

export default Modal;
