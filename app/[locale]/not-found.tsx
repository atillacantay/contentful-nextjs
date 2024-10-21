import Button from "@/components/common/button";
import { getLocale } from "next-intl/server";
import Stack from "../components/common/stack";
import { Header, Text } from "../components/common/typography";

const NotFoundPage = async () => {
  const locale = await getLocale();
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
              404
            </Header>
            <Text
              weight="bold"
              size="3xl"
              className="mb-6 text-black md:text-4xl"
            >
              OOPS, THIS WAS NOT SUPPOSED TO HAPPEN…
            </Text>
            <Text size="lg" weight="light" className="mb-6 text-black/50">
              Try Using The Search Box Above Or Return Home To Find What You’re
              Looking For.
            </Text>
            <Button
              size="lg"
              as="a"
              href={`/${locale}`}
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

export default NotFoundPage;
