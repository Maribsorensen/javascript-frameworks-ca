import { Toaster, ToastBar, ToastIcon } from 'react-hot-toast';

/**
 * AppToaster component displays a toast notification system.
 * It uses the react-hot-toast library to show notifications at the top center of the screen.
 * @returns {JSX.Element} The AppToaster component.
 */

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
