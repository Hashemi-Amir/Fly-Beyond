import { Outlet } from 'react-router-dom';

function LoginLayout() {
  return (
    <div className="relative flex h-fit min-h-screen w-screen max-w-full items-center justify-center bg-[url('/ballons.webp')] bg-cover bg-bottom p-4 after:absolute after:inset-0 after:block after:h-full after:w-full after:backdrop-blur-[3px] dark:after:bg-dark-primary-900/70">
      {/*  */}
      <div className="z-50 grid h-[400px] max-h-fit w-full max-w-[1000px] grid-cols-9 overflow-hidden rounded-[15px] sm:h-[500px] ">
        {/*  */}
        <div className="relative hidden h-full bg-[url('/Airplane_window.webp')] bg-cover bg-center after:absolute after:inset-0 after:block after:h-full after:w-full after:bg-gradient-to-r after:from-[rgba(0,0,0,.1)] after:to-[rgba(0,0,0,.3)] dark:after:from-[rgba(0,0,0,.5)] dark:after:to-[rgba(0,0,0,.7)] md:col-span-5 md:block "></div>
        {/*  */}
        <div className="col-span-full flex h-full flex-col items-center bg-[rgba(255,255,255,.75)] px-6 py-10 backdrop-blur-[3px] dark:bg-dark-primary-900/75 sm:px-12 md:col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
