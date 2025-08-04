"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Clock,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "../re-use/app-sidebar";
import { getWeeksSpecials } from "../api/getWeeksSpecials";

export default function HomePage() {
  const [specials, setSpecials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpecials = async () => {
      try {
        const result = await getWeeksSpecials();
        if (result.success) {
          setSpecials(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch specials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpecials();
  }, []);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4'>
          <SidebarTrigger className='-ml-1' />
          <Separator orientation='vertical' className='mr-2 h-4' />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className='hidden md:block'>
                <BreadcrumbLink href='#'>Little Lemon</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className='hidden md:block' />
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <main className='flex-1'>
          <section
            id='home'
            className='bg-gradient-to-br from-primary/20 to-secondary/10 py-16 lg:py-24'
          >
            <div className='container mx-auto px-4'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div>
                  <h1 className='text-4xl lg:text-6xl font-bold mb-4 text-foreground'>
                    Little Lemon
                  </h1>
                  <p className='text-xl lg:text-2xl text-secondary mb-6 font-semibold'>
                    Chicago
                  </p>
                  <p className='text-lg mb-8 leading-relaxed text-muted-foreground'>
                    We are a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist. Experience
                    authentic flavors crafted with love and the finest
                    ingredients in the heart of Chicago.
                  </p>
                  <Button
                    size='lg'
                    className='bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg shadow-lg'
                  >
                    Reserve a Table
                  </Button>
                </div>
                <div className='flex justify-center'>
                  <div className='relative'>
                    <img
                      src='/images/restaurant-chef.jpg'
                      alt='Little Lemon chef preparing fresh dishes'
                      className='rounded-lg shadow-2xl w-full max-w-md object-cover h-96'
                    />
                    <div className='absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg'>
                      <div className='flex items-center gap-1'>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className='w-4 h-4 fill-current' />
                        ))}
                      </div>
                      <p className='text-sm font-semibold mt-1'>5.0 Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='menu' className='py-20 lg:py-28 bg-background'>
            <div className='container mx-auto px-4'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl lg:text-6xl font-bold text-foreground mb-6'>
                  This Week's Specials!
                </h2>
                <p className='text-xl text-muted-foreground max-w-3xl mx-auto mb-8'>
                  Discover our chef's carefully curated selection of
                  Mediterranean favorites, made fresh daily with the finest
                  ingredients.
                </p>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                {isLoading
                  ? [...Array(3)].map((_, index) => (
                      <Card
                        key={index}
                        className='overflow-hidden shadow-xl border-0 bg-card'
                      >
                        <div className='relative'>
                          <Skeleton className='aspect-[4/3] w-full' />
                        </div>
                        <CardContent className='p-8'>
                          <div className='mb-4'>
                            <Skeleton className='h-8 w-3/4 mb-2' />
                            <div className='flex items-center gap-2 mb-4'>
                              <Skeleton className='h-4 w-20' />
                              <Skeleton className='h-4 w-12' />
                            </div>
                          </div>
                          <Skeleton className='h-20 w-full mb-6' />
                          <div className='flex items-center justify-between'>
                            <Skeleton className='h-4 w-20' />
                            <Skeleton className='h-10 w-24' />
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  : specials.map((special) => (
                      <Card
                        key={special.id}
                        className='group overflow-hidden shadow-xl border-0 bg-card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'
                      >
                        <div className='relative overflow-hidden'>
                          <div className='aspect-[4/3] overflow-hidden'>
                            <img
                              src={special.image}
                              alt={special.name}
                              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                          </div>
                          <div className='absolute top-4 right-4'>
                            <Badge className='bg-primary text-primary-foreground font-bold text-lg px-4 py-2 shadow-lg'>
                              ${special.price}
                            </Badge>
                          </div>
                          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </div>

                        <CardContent className='p-8'>
                          <div className='mb-4'>
                            <CardTitle className='text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300'>
                              {special.name}
                            </CardTitle>
                            <div className='flex items-center gap-2 mb-4'>
                              <div className='flex'>
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < Math.floor(special.rating)
                                        ? "fill-primary text-primary"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className='text-sm text-muted-foreground'>
                                ({special.rating})
                              </span>
                            </div>
                          </div>

                          <CardDescription className='text-muted-foreground text-base leading-relaxed mb-6'>
                            {special.description}
                          </CardDescription>

                          <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                              <Clock className='w-4 h-4' />
                              <span>{special.prepTime}</span>
                            </div>
                            <Button className='bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300'>
                              Order Now 🛵
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
              </div>
            </div>
          </section>

          <section id='testimonials' className='py-16 lg:py-24 bg-muted/30'>
            <div className='container mx-auto px-4'>
              <h2 className='text-3xl lg:text-5xl font-bold text-center text-foreground mb-12'>
                Testimonials
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {[
                  {
                    name: "Sarah M",
                    rating: 5,
                    review:
                      "Amazing food and great service! The Greek salad was fresh and delicious.",
                  },
                  {
                    name: "John D",
                    rating: 5,
                    review:
                      "Best Mediterranean restaurant in Chicago. Highly recommend the bruschetta!",
                  },
                  {
                    name: "Maria L",
                    rating: 5,
                    review:
                      "The lemon dessert is to die for. Perfect ending to a wonderful meal.",
                  },
                  {
                    name: "David K",
                    rating: 5,
                    review:
                      "Authentic flavors and cozy atmosphere. Will definitely be coming back!",
                  },
                ].map((testimonial, index) => (
                  <Card
                    key={index}
                    className='text-center shadow-lg border-2 hover:border-primary transition-all duration-300 hover:shadow-xl'
                  >
                    <CardHeader>
                      <div className='flex justify-center mb-4'>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className='w-5 h-5 fill-primary text-primary'
                          />
                        ))}
                      </div>
                      <div className='w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center'>
                        <span className='text-primary-foreground font-bold text-xl'>
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <CardTitle className='text-lg font-bold'>
                        {testimonial.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className='text-muted-foreground text-base'>
                        "{testimonial.review}"
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id='about' className='py-16 lg:py-24 bg-background'>
            <div className='container mx-auto px-4'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div>
                  <h2 className='text-3xl lg:text-5xl font-bold text-foreground mb-4'>
                    Little Lemon
                  </h2>
                  <p className='text-xl lg:text-2xl text-secondary mb-6 font-semibold'>
                    Chicago
                  </p>
                  <p className='text-muted-foreground leading-relaxed text-lg mb-6'>
                    Based in Chicago, Illinois, Little Lemon is a family-owned
                    Mediterranean restaurant, focused on traditional recipes
                    served with a modern twist. The chefs draw inspiration from
                    Italian, Greek, and Turkish culture and have a menu of 12–15
                    items that they rotate seasonally.
                  </p>
                  <p className='text-muted-foreground leading-relaxed text-lg'>
                    Founded by Adrian and Mario, Little Lemon brings authentic
                    Mediterranean flavors to Chicago with a modern twist. Every
                    dish is crafted with love and the finest ingredients,
                    creating an unforgettable dining experience for our guests.
                  </p>
                </div>
                <div className='flex justify-center'>
                  <img
                    src='/images/mario-adrian-b.jpg'
                    alt='Mario and Adrian, the founders of Little Lemon restaurant'
                    className='rounded-lg shadow-2xl w-full max-w-md object-cover h-96'
                  />
                </div>
              </div>
            </div>
          </section>

          <section className='py-16 lg:py-24 bg-muted/30'>
            <div className='container mx-auto px-4'>
              <div className='text-center mb-12'>
                <h2 className='text-3xl lg:text-5xl font-bold text-foreground mb-4'>
                  Our Restaurant
                </h2>
                <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                  Experience the warm and inviting atmosphere of Little Lemon,
                  where Mediterranean charm meets modern elegance.
                </p>
              </div>
              <div className='flex justify-center'>
                <img
                  src='/images/restaurant-interior.jpg'
                  alt='Beautiful interior of Little Lemon restaurant with outdoor terrace'
                  className='rounded-lg shadow-2xl w-full max-w-4xl object-cover h-96'
                />
              </div>
            </div>
          </section>

          <footer id='contact' className='bg-foreground text-background py-12'>
            <div className='container mx-auto px-4'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                  <div className='flex items-center gap-3 mb-4'>
                    <div>
                      <div className='font-bold text-primary text-xl'>
                        Little Lemon
                      </div>
                      <div className='text-sm text-muted'>
                        Chicago Restaurant
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className='text-lg font-semibold mb-4 text-primary'>
                    Navigation
                  </h3>
                  <ul className='space-y-2'>
                    <li>
                      <a
                        href='#home'
                        className='text-muted hover:text-primary transition-colors'
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href='#about'
                        className='text-muted hover:text-primary transition-colors'
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href='#menu'
                        className='text-muted hover:text-primary transition-colors'
                      >
                        Menu
                      </a>
                    </li>
                    <li>
                      <a
                        href='#reservations'
                        className='text-muted hover:text-primary transition-colors'
                      >
                        Reservations
                      </a>
                    </li>
                    <li>
                      <a
                        href='#order'
                        className='text-muted hover:text-primary transition-colors'
                      >
                        Order Online
                      </a>
                    </li>
                    <li>
                      <a
                        href='#login'
                        className='text-muted hover:text-primary transition-colors'
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-semibold mb-4 text-primary'>
                    Contact
                  </h3>
                  <div className='space-y-2'>
                    <div className='flex items-center'>
                      <MapPin className='w-4 h-4 mr-2 text-primary' />
                      <span className='text-muted'>
                        123 Main St, Chicago, IL
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <Phone className='w-4 h-4 mr-2 text-primary' />
                      <span className='text-muted'>(555) 123-4567</span>
                    </div>
                    <div className='flex items-center'>
                      <Mail className='w-4 h-4 mr-2 text-primary' />
                      <span className='text-muted'>info@littlelemon.com</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className='text-lg font-semibold mb-4 text-primary'>
                    Follow Us
                  </h3>
                  <div className='flex space-x-4'>
                    <a
                      href='#'
                      className='text-muted hover:text-primary transition-colors'
                    >
                      <Facebook className='w-6 h-6' />
                    </a>
                    <a
                      href='#'
                      className='text-muted hover:text-primary transition-colors'
                    >
                      <Instagram className='w-6 h-6' />
                    </a>
                    <a
                      href='#'
                      className='text-muted hover:text-primary transition-colors'
                    >
                      <Twitter className='w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='border-t border-muted/20 mt-8 pt-8 text-center'>
                <p className='text-muted'>
                  © {new Date().getFullYear()} Little Lemon. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
