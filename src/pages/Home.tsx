import React, { Suspense } from 'react';
import Container from '@mui/material/Container/Container';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';

import * as Scroll from 'react-scroll';
import Skeleton from '@mui/material/Skeleton/Skeleton';
const MyWork = React.lazy(() => import('./MyWork'));

export const Home = () => {
    return (
        <div>
            <Container sx={{maxWidth: '100%'}} maxWidth={false} disableGutters >
                <Scroll.Element name="home">
                    <Hero />
                </Scroll.Element>
                <Scroll.Element name="experience">
                    <Suspense fallback={ <Skeleton variant="rectangular" width={210} height={118} /> }>
                        <MyWork/>
                    </Suspense>
                </Scroll.Element>
            </Container>
            <Container sx={{maxWidth: '100%'}} maxWidth={false} disableGutters>
                <Footer showSocial={true} />
            </Container>
        </div>
    );
};
