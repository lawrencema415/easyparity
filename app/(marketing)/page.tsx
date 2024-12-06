import { Button } from '@/components/ui/button';
import { SignUpButton } from '@clerk/nextjs';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { NeonIcon } from './_icons/Neon';
import { ClerkIcon } from './_icons/Clerk';
import { subscriptionTiersInOrder } from '@/data/subscriptionTiers';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { formatCompactNumber } from '@/lib/formatters';
import { cn } from '@/lib/utils';
import BrandLogo from '../../components/BrandLogo';

export default function HomePage() {
	return (
		<>
			<section className='min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4'>
				<h1 className='text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4'>
					Price smart, Sell for more profit!
				</h1>
				<p className='text-lg lg:text-3xl max-w-screen-xl'>
					Optimize product across countries to maximize sales.
				</p>
				<SignUpButton>
					<Button className='rounded-xl text-lg p-6 flex gap-2'>
						Get started for free <ArrowRightIcon />
					</Button>
				</SignUpButton>
			</section>
			<section className='bg-primary text-primary-foreground'>
				<div className='container py-16 flex flex-col gap-16 px-8 md:px-16'>
					<h2 className='text-3xl text-center text-balance'>
						Trusted by top companies
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16'>
						<Link
							href='https://neon.tech>
						'
						>
							<NeonIcon />
						</Link>
						<Link
							href='https://clerk.com>
						'
						>
							<ClerkIcon />
						</Link>
						<Link
							href='https://neon.tech>
						'
						>
							<NeonIcon />
						</Link>
						<Link
							href='https://clerk.com>
						'
						>
							<ClerkIcon />
						</Link>
						<Link
							href='https://neon.tech>
						'
						>
							<NeonIcon />
						</Link>
						<Link
							href='https://clerk.com>
						'
						>
							<ClerkIcon />
						</Link>
						<Link
							href='https://neon.tech>
						'
						>
							<NeonIcon />
						</Link>
						<Link
							href='https://clerk.com>
						'
						>
							<ClerkIcon />
						</Link>
						<Link
							href='https://neon.tech>
						'
						>
							<NeonIcon />
						</Link>
						<Link
							href='https://clerk.com>
						'
						>
							<ClerkIcon />
						</Link>
						<Link
							className='md:max-xl:hidden'
							href='https://clerk.com>
						'
						>
							<ClerkIcon />
						</Link>
					</div>
				</div>
			</section>
			<section id='pricing'>
				<h2 className='px-8 py-16 bg-accent/5 font-semibold mb-8'>
					Pricing software that pays for itself
				</h2>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto'>
					{subscriptionTiersInOrder.map((tiers) => (
						<PricingCard key={tiers.name} {...tiers} />
					))}
				</div>
			</section>
			<footer className='container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start'>
				<Link href='/'>
					<BrandLogo />
				</Link>
				<div className='flex flex-col sm:flex-row gap-8'>
					<div className='flex flex-col gap-8'>
						<FooterLinkGroup
							title='Help'
							links={[
								{ label: 'PPP Discounts', href: '#' },
								{ label: 'Discount API', href: '#' },
							]}
						/>
						<FooterLinkGroup
							title='Solutions'
							links={[
								{ label: 'Newsletter', href: '#' },
								{ label: 'SaaS Business', href: '#' },
								{ label: 'Online Courses', href: '#' },
							]}
						/>
					</div>
					<div className='flex flex-col gap-8'>
						<FooterLinkGroup
							title='Features'
							links={[{ label: 'PPP Discounts', href: '#' }]}
						/>
						<FooterLinkGroup
							title='Tools'
							links={[
								{ label: 'Salary Converter', href: '#' },
								{ label: 'Coupon Generator', href: '#' },
								{ label: 'Stripe App', href: '#' },
							]}
						/>
						<FooterLinkGroup
							title='Company'
							links={[
								{ label: 'Affiliate', href: '#' },
								{ label: 'Twitter', href: '#' },
								{ label: 'Terms of Service', href: '#' },
							]}
						/>
					</div>
					<div className='flex flex-col gap-8'>
						<FooterLinkGroup
							title='Integrations'
							links={[
								{ label: 'Lemon Squeezy', href: '#' },
								{ label: 'Gumroad', href: '#' },
								{ label: 'Stripe', href: '#' },
								{ label: 'Chargebee', href: '#' },
								{ label: 'Paddle', href: '#' },
							]}
						/>
						<FooterLinkGroup
							title='Tutorials'
							links={[
								{ label: 'Any Website', href: '#' },
								{ label: 'Lemon Squeezy', href: '#' },
								{ label: 'Gumroad', href: '#' },
								{ label: 'Stripe', href: '#' },
								{ label: 'Chargebee', href: '#' },
								{ label: 'Paddle', href: '#' },
							]}
						/>
					</div>
				</div>
			</footer>
		</>
	);
}

function PricingCard({
	name,
	priceInCents,
	maxNumberOfProducts,
	maxNumberOfVisits,
	canAccessAnalytics,
	canCustomizeBanner,
	canRemoveBranding,
}: (typeof subscriptionTiersInOrder)[number]) {
	const isMostPopular = name === 'Standard';

	return (
		<Card>
			<CardHeader>
				<div className='text-accent text-xl font-semibold mb-8'>{name}</div>
				<CardTitle className='text-xl font-bold'>
					${priceInCents * 100} / mo
				</CardTitle>
				<CardDescription>
					{formatCompactNumber(maxNumberOfVisits)}
					{maxNumberOfVisits} visits / {maxNumberOfProducts} products
				</CardDescription>
			</CardHeader>
			<CardContent>
				<SignUpButton>
					<Button
						variant={isMostPopular ? 'accent' : 'default'}
						className='w-full text-lg rounded-lg'
					>
						Get started
					</Button>
				</SignUpButton>
			</CardContent>
			<CardFooter className='flex flex-col gap-4 items-start'>
				<Feature className='font-bold'>
					{maxNumberOfProducts}{' '}
					{maxNumberOfProducts === 1 ? 'product' : 'products'}
				</Feature>
				<Feature>Parity Discounts</Feature>
				{canCustomizeBanner && <Feature>Banner Customization</Feature>}
				{canAccessAnalytics && <Feature>Advanced Analytics</Feature>}
				{canRemoveBranding && <Feature>Remove watermark branding</Feature>}
			</CardFooter>
		</Card>
	);
}

function Feature({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={cn('flex items-center gap-2', className)}>
			<CheckIcon className='size-4 stroke-accent bg-accent/25 rounded-full p-0.5' />
			<span>{children}</span>
		</div>
	);
}

function FooterLinkGroup({
	title,
	links,
}: {
	title: string;
	links: { label: string; href: string }[];
}) {
	return (
		<div className='flex flex-col gap-4'>
			<h3 className='font-semibold'>{title}</h3>
			<div className='flex flex-col gap-2 text-sm'>
				{links.map((link) => (
					<Link key={link.href} href={link.href}>
						{link.label}
					</Link>
				))}
			</div>
		</div>
	);
}
