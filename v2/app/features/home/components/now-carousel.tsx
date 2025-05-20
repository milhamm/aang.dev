import { wrap } from 'motion';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useReducer } from 'react';
import { SplitText } from '~/components/ui/split-text';

const NOTABLE_PROJECTS = [
  {
    title: 'Sukanda Onelink',
    description:
      'Enterprise B2B E-Commerce Platform. Serving over 5000+ SKU for Indonesian Businesses',
    stack: ['react', 'next', 'ts', 'nx', 'chakra'],
    image: '/images/sol.png',
  },
  {
    title: 'Global Energy Transition',
    description:
      'An open platform that provides crucial energy data and information for specific regions.',
    stack: ['react', 'next', 'ts', 'tailwind', 'mapbox'],
    image: '/images/gem.png',
  },
  {
    title: 'NearbySky',
    description: 'UAV PaaS to manage jobs and integrate data with partners and suppliers',
    stack: ['react', 'mapbox'],
    image: '/images/nbs.png',
  },
];

const threeArray = Array.from({ length: 3 }).map((_, i) => i);

type SlideAction = { type: 'next' } | { type: 'prev' } | { type: 'set'; slide: number };

export function NowCarousel() {
  const slidesCount = NOTABLE_PROJECTS.length;

  const [currentSlide, dispatch] = useReducer((slide: number, action: SlideAction) => {
    if (action.type === 'next') return wrap(0, slidesCount, slide + 1);
    if (action.type === 'prev') return wrap(0, slidesCount, slide - 1);
    if (action.type === 'set') return wrap(0, slidesCount, action.slide);
    throw new Error('Method not implemented');
  }, 0);

  useEffect(() => {
    const timer = setInterval(() => dispatch({ type: 'next' }), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-3">
      <div className="font-bricolage text-muted-foreground py-4 text-lg font-medium">
        Notable Projects
      </div>
      <div className="flex gap-8">
        <div className="relative isolate h-72 flex-1 overflow-hidden">
          <div className="from-background/0 to-background pointer-events-none absolute right-0 bottom-0 left-0 z-50 h-24 bg-gradient-to-b to-90%" />
          <div>
            {threeArray.map((i) => {
              const currentProject = NOTABLE_PROJECTS[wrap(0, slidesCount, currentSlide + i)];
              return (
                <AnimatePresence mode="popLayout" key={i}>
                  <motion.div
                    key={`${currentProject.title}`}
                    className="pb-4"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{
                      duration: 0.8,
                      type: 'tween',
                      ease: [0.602, 0.001, 0.175, 1],
                    }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="object-cover object-top"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>
        </div>
        <div className="flex-1 space-y-4 pb-6">
          <div className="flex gap-2">
            {NOTABLE_PROJECTS.map((_, i) => (
              <button type="button" className="relative -mt-4 size-full py-4" key={i}>
                <div className="bg-muted relative isolate size-full h-0.5 origin-left">
                  {i === currentSlide ? (
                    <motion.div layoutId="activeState" className="bg-foreground absolute inset-0" />
                  ) : null}
                </div>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <SplitText
              key={`${NOTABLE_PROJECTS[currentSlide].title}`}
              className="font-bricolage text-2xl font-bold"
              initial={{ opacity: 1, y: '100%' }}
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              variants={{
                visible: (i) => ({
                  opacity: 1,
                  y: '0%',
                  transition: {
                    type: 'tween',
                    delay: i * 0.1,
                  },
                }),
              }}
            >
              {NOTABLE_PROJECTS[currentSlide].title as string}
            </SplitText>

            <motion.p
              key={`${NOTABLE_PROJECTS[currentSlide].description}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-muted-foreground"
            >
              {NOTABLE_PROJECTS[currentSlide].description}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
