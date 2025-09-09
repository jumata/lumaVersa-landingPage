import { useEffect, useState } from 'react';
import { Navbar as MTNavbar, Typography, Button, IconButton } from '@material-tailwind/react';
import type { NavItem } from '../types';


export default function NavbarMT({ brand, items }: { brand: string; items: NavItem[] }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <div className={`sticky top-0 z-50 ${scrolled ? 'backdrop-blur bg-white/70' : 'bg-transparent'}`}>
            <MTNavbar fullWidth shadow={scrolled} className="mx-auto max-w-container px-4 py-3">
                <div className="flex items-center">
                    <Typography as="a" href="#" variant="h6" className="mr-4 cursor-pointer py-1.5 text-brand-700 tracking-wider">
                        {brand}
                    </Typography>
                    <ul className="ml-auto hidden items-center gap-2 lg:flex">
                        {items.map((it) => (
                            <li key={it.href}>
                                <Button variant="text" className="capitalize" onClick={() => (window.location.href = it.href)}>
                                    {it.label}
                                </Button>
                            </li>
                        ))}
                        <li>
                            <Button variant="outlined" className="capitalize" onClick={() => (window.location.href = '#login')}>
                                login
                            </Button>
                        </li>
                        <li>
                            <Button color="blue" className="capitalize" onClick={() => (window.location.href = '#contacto')}>
                                Contáctanos
                            </Button>
                        </li>
                    </ul>
                    <IconButton
                        variant="text"
                        ripple={false}
                        onClick={() => setOpen((v) => !v)}
                        className="ml-auto lg:hidden"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </IconButton>
                </div>
                {open && (
                    <div className="mt-3 grid gap-2 lg:hidden">
                        {items.map((it) => (
                            <Button key={it.href} variant="text" className="justify-start" onClick={() => (window.location.href = it.href)}>
                                {it.label}
                            </Button>
                        ))}
                        <Button variant="outlined" onClick={() => (window.location.href = '#login')}>login</Button>
                        <Button color="blue" onClick={() => (window.location.href = '#contacto')}>Contáctanos</Button>
                    </div>
                )}
            </MTNavbar>
        </div>
    );
}