import Link from 'next/link';
import BrandLogo from '../../../components/BrandLogo';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

export default function NavBar() {
	return (
		<header className='flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95'>
			<nav className='flex items-center justify-between gap-10 container font-semibold'>
				<Link href='/' className='mr-auto'>
					<BrandLogo />
				</Link>
				<div className='flex items-center gap-6'>
					<Link className='text-lg' href='#'>
						Features
					</Link>
					<Link className='text-lg' href='/#pricing'>
						Pricing
					</Link>
					<Link className='text-lg' href='#'>
						About
					</Link>
					<span className='text-lg'>
						<SignedIn>
							<Link href='/dashboard'>Dashboard</Link>
						</SignedIn>
						<SignedOut>
							<SignInButton>Login</SignInButton>
						</SignedOut>
					</span>
				</div>
			</nav>
		</header>
	);
}
