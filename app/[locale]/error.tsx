"use client";

import Button from "@/components/common/button";
import Stack from "@/components/common/stack";
import { Header, Text } from "@/components/common/typography";
import { Link } from "@/i18n/routing";
import { useEffect } from "react";

const Error = ({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <main>
        <Stack
          direction="col"
          className="py-16 px-4 mx-auto w-full lg:py-24 lg:px-6"
        >
          <Stack
            direction="col"
            justifyContent="center"
            alignItems="center"
            className="mx-auto w-full text-center"
          >
            <Header
              as="h3"
              className="mb-4 text-7xl font-extrabold lg:text-9xl text-black"
            >
              {error.name}
            </Header>
            <Text
              weight="bold"
              size="3xl"
              className="mb-6 text-black md:text-4xl"
            >
              OOPS, THIS WAS NOT SUPPOSED TO HAPPEN…
            </Text>
            <Button
              size="lg"
              as={Link}
              href="/"
              variant="contained"
              className="bg-primary_red"
            >
              Go Back To Homepage
            </Button>
          </Stack>
        </Stack>
      </main>
    </>
  );
};

export default Error;
