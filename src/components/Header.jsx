import AppleLogo from '../assets/logos/apple.svg?react';

export default function Header() {
  return (
    <header className='fixed inset-0 bg-[#161617] h-[44px] z-[1]'>
      <div className='max-w-5xl w-full mx-auto flex items-center px-2'>
        <a href='/'>
          <AppleLogo />
        </a>
      </div>
    </header>
  );
}
