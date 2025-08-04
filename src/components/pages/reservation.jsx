import { useState } from "react";
import { Calendar, Clock, Users, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AppSidebar } from "@/components/re-use/app-sidebar";
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

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation submitted:", formData);

    alert("Reservation submitted successfully!");
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
                <BreadcrumbPage>Reservations</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>


        <main className='flex-1 bg-gradient-to-br from-primary/5 to-secondary/5'>
          <div className='min-h-screen flex items-center justify-center py-8 px-4'>
            <Card className='w-full max-w-4xl mx-auto shadow-2xl border border-border bg-card'>
              <CardHeader className='text-center bg-gradient-to-r from-primary/10 to-secondary/10 border-b'>
                <div className='flex justify-center mb-6'>
                  <div className='flex items-center gap-4 p-4 bg-background rounded-full shadow-lg'>
                    <Calendar className='w-8 h-8 text-primary' />
                    <Clock className='w-8 h-8 text-secondary' />
                    <Users className='w-8 h-8 text-primary' />
                  </div>
                </div>
                <CardTitle className='text-3xl lg:text-4xl font-bold text-foreground mb-2'>
                  Make a Reservation
                </CardTitle>
                <CardDescription className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                  Book your table at Little Lemon and experience authentic
                  Mediterranean cuisine in the heart of Chicago
                </CardDescription>
              </CardHeader>
              <CardContent className='p-6 lg:p-8'>
                <form onSubmit={handleSubmit} className='space-y-8'>

                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='space-y-3'>
                      <Label
                        htmlFor='date'
                        className='text-base font-semibold flex items-center gap-2 text-foreground'
                      >
                        <Calendar className='w-5 h-5 text-primary' />
                        Date
                      </Label>
                      <Input
                        id='date'
                        type='date'
                        value={formData.date}
                        onChange={(e) =>
                          handleInputChange("date", e.target.value)
                        }
                        required
                        className='h-14 text-lg bg-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium px-4'
                      />
                    </div>
                    <div className='space-y-3'>
                      <Label
                        htmlFor='time'
                        className='text-base font-semibold flex items-center gap-2 text-foreground'
                      >
                        <Clock className='w-5 h-5 text-secondary' />
                        Time
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("time", value)
                        }
                        required
                      >
                        <SelectTrigger className='min-h-14 w-full text-lg bg-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 font-medium px-4 flex items-center'>
                          <SelectValue placeholder='Select time' />
                        </SelectTrigger>
                        <SelectContent className='bg-background border border-border shadow-xl min-w-[200px]'>
                          <SelectItem
                            value='17:00'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            5:00 PM
                          </SelectItem>
                          <SelectItem
                            value='17:30'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            5:30 PM
                          </SelectItem>
                          <SelectItem
                            value='18:00'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            6:00 PM
                          </SelectItem>
                          <SelectItem
                            value='18:30'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            6:30 PM
                          </SelectItem>
                          <SelectItem
                            value='19:00'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            7:00 PM
                          </SelectItem>
                          <SelectItem
                            value='19:30'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            7:30 PM
                          </SelectItem>
                          <SelectItem
                            value='20:00'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            8:00 PM
                          </SelectItem>
                          <SelectItem
                            value='20:30'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            8:30 PM
                          </SelectItem>
                          <SelectItem
                            value='21:00'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            9:00 PM
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>


                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='space-y-3'>
                      <Label
                        htmlFor='guests'
                        className='text-base font-semibold flex items-center gap-2 text-foreground'
                      >
                        <Users className='w-5 h-5 text-primary' />
                        Number of Guests
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("guests", value)
                        }
                        required
                      >
                        <SelectTrigger className='min-h-14 w-full text-lg bg-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 font-medium px-4 flex items-center'>
                          <SelectValue placeholder='Select number of guests' />
                        </SelectTrigger>
                        <SelectContent className='bg-background border border-border shadow-xl min-w-[200px]'>

                          <SelectItem
                            value='1'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            1 Guest
                          </SelectItem>
                          <SelectItem
                            value='2'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            2 Guests
                          </SelectItem>
                          <SelectItem
                            value='3'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            3 Guests
                          </SelectItem>
                          <SelectItem
                            value='4'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            4 Guests
                          </SelectItem>
                          <SelectItem
                            value='5'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            5 Guests
                          </SelectItem>
                          <SelectItem
                            value='6'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            6 Guests
                          </SelectItem>
                          <SelectItem
                            value='7'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            7 Guests
                          </SelectItem>
                          <SelectItem
                            value='8'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            8 Guests
                          </SelectItem>
                          <SelectItem
                            value='8+'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            8+ Guests
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className='space-y-3'>
                      <Label
                        htmlFor='occasion'
                        className='text-base font-semibold flex items-center gap-2 text-foreground'
                      >
                        <PartyPopper className='w-5 h-5 text-secondary' />
                        Occasion
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("occasion", value)
                        }
                      >
                        <SelectTrigger className='min-h-14 w-full text-lg bg-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 font-medium px-4 flex items-center'>
                          <SelectValue placeholder='Select occasion (optional)' />
                        </SelectTrigger>
                        <SelectContent className='bg-background border border-border shadow-xl min-w-[200px]'>

                          <SelectItem
                            value='birthday'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            🎂 Birthday
                          </SelectItem>
                          <SelectItem
                            value='anniversary'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            💕 Anniversary
                          </SelectItem>
                          <SelectItem
                            value='date'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            🌹 Date Night
                          </SelectItem>
                          <SelectItem
                            value='business'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            💼 Business Dinner
                          </SelectItem>
                          <SelectItem
                            value='celebration'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            🎉 Celebration
                          </SelectItem>
                          <SelectItem
                            value='other'
                            className='text-lg py-3 px-4 cursor-pointer'
                          >
                            ✨ Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>


                  <div className='space-y-6'>
                    <div className='border-b border-border pb-2'>
                      <h3 className='text-xl font-bold text-foreground'>
                        Contact Information
                      </h3>
                      <p className='text-sm text-muted-foreground mt-1'>
                        We'll use this information to confirm your reservation
                      </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                      <div className='space-y-3'>
                        <Label
                          htmlFor='name'
                          className='text-base font-semibold text-foreground'
                        >
                          Full Name *
                        </Label>
                        <Input
                          id='name'
                          type='text'
                          placeholder='Enter your full name'
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                          className='h-14 text-lg bg-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium px-4'
                        />
                      </div>
                      <div className='space-y-3'>
                        <Label
                          htmlFor='email'
                          className='text-base font-semibold text-foreground'
                        >
                          Email Address *
                        </Label>
                        <Input
                          id='email'
                          type='email'
                          placeholder='Enter your email address'
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          className='h-14 text-lg bg-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium px-4'
                        />
                      </div>
                    </div>

                    <div className='space-y-3'>
                      <Label
                        htmlFor='phone'
                        className='text-base font-semibold text-foreground'
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id='phone'
                        type='tel'
                        placeholder='Enter your phone number'
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                        className='h-14 text-lg bg-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium px-4'
                      />
                    </div>
                  </div>


                  <div className='space-y-3'>
                    <Label
                      htmlFor='special-requests'
                      className='text-base font-semibold text-foreground'
                    >
                      Special Requests (Optional)
                    </Label>
                    <Textarea
                      id='special-requests'
                      placeholder='Any dietary restrictions, seating preferences, or special requests...'
                      value={formData.specialRequests}
                      onChange={(e) =>
                        handleInputChange("specialRequests", e.target.value)
                      }
                      className='min-h-[120px] text-lg bg-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none font-medium px-4 py-3'
                    />
                  </div>


                  <div className='pt-4'>
                    <Button
                      type='submit'
                      size='lg'
                      className='w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]'
                    >
                      Submit Reservation
                    </Button>
                    <p className='text-sm text-muted-foreground text-center mt-3'>
                      You'll receive a confirmation email within 24 hours
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
