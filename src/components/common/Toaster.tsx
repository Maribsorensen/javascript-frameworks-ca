import { Toaster, ToastBar, ToastIcon } from 'react-hot-toast';

export function AppToaster() {
  return (
    <Toaster position="top-center" toastOptions={{ duration: 3000 }}>
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            background: 'white',
            color: 'black',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            padding: '0.75rem 1rem',
            fontSize: '0.875rem',
          }}
        >
          {({ message }) => (
            <div className="flex items-center gap-2 font-body">
              <ToastIcon toast={t} />
              <span>{message}</span>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}
