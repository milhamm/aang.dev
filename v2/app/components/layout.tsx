import { Outlet } from 'react-router';
import { Navbar } from './navbar';

export default function MainLayout() {
  return (
    <div className="min-h-svh relative">
      <Navbar />
      <main className="isolate grid grid-cols-[1fr_min(var(--container-4xl),100%)_1fr] [&_>_*]:col-[2]">
        <Outlet />
      </main>
    </div>
  );
}
