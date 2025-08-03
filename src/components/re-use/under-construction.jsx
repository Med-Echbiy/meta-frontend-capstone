import { Construction, AlertTriangle, Home, ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function UnderConstruction() {
  return (
    <Card className='w-full max-w-md mx-auto border-2 border-primary/20 bg-primary/5'>
      <CardHeader className='text-center'>
        <div className='flex justify-center mb-4'>
          <div className='relative'>
            <Construction className='w-16 h-16 text-primary' />
            <AlertTriangle className='w-6 h-6 text-accent absolute -top-1 -right-1' />
          </div>
        </div>
        <CardTitle className='text-2xl font-bold text-foreground'>
          Under Construction
        </CardTitle>
        <Badge variant='secondary' className='w-fit mx-auto'>
          Coming Soon
        </Badge>
      </CardHeader>
      <CardContent className='text-center'>
        <CardDescription className='text-base'>
          We're working hard to bring you something amazing! This feature will
          be available soon.
        </CardDescription>
      </CardContent>
      <CardFooter className='flex items-center justify-center'>
        <Link to='/'>
          <Button className='flex items-center gap-2 cursor-pointer'>
            <ArrowLeft />
            Go Back
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
