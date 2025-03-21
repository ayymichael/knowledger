"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useAppSession } from "@/entities/session/use-app-session";
import { useSignOut } from "@/modules/auth/_vm/use-sign-out";
import { Skeleton } from "@/shared/ui/skeleton";
import { SignInButton } from "@/modules/auth/sign-in-button";

export function Profile() {
  const session = useAppSession();
  const { signOut, isPending: isLoadingSignOut } = useSignOut();

  if (session.status === "loading")
    return <Skeleton className="w-8 h-8 rounded-full" />;

  if (session.status === "unauthenticated") return <SignInButton />;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="p-px rounded-full self-center h-8 w-8"
        >
          {session.data ? (
            <Avatar className="w-8 h-8 p-1.5">
              <AvatarImage src={session.data.user.image} />
              <AvatarFallback>
                {session.data.user.name
                  ? session.data.user.name.slice(0, 2).toLocaleUpperCase()
                  : "00"}
              </AvatarFallback>
            </Avatar>
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-2 ">
        {session.data ? (
          <DropdownMenuLabel>
            <p>{session.data.user.name}</p>
            <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
              {session.data.user.email}
            </p>
          </DropdownMenuLabel>
        ) : null}
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {session.data ? (
            <DropdownMenuItem asChild className="cursor-pointer select-none">
              <Link href="/profile/1">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
          ) : null}
          <DropdownMenuItem
            disabled={isLoadingSignOut}
            onClick={() => signOut()}
            className="cursor-pointer select-none"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
