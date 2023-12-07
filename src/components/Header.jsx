import AppleLogo from '../assets/logos/apple.svg?react';

export default function Header() {
  return (
    <header className="fixed inset-0 z-[1] h-[44px] bg-[#161617]">
      <div className="mx-auto flex w-full max-w-5xl items-center px-2">
        <a href="/">
          <AppleLogo />
        </a>
      </div>
    </header>
  );
}
