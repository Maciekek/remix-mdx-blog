import { motion } from "framer-motion";
import { prisma } from "~/db.server";

import {
  textVariants,
  containerVariants,
  imageLoadAnimationProps,
} from "~/data/animationConfig";
import {json, LoaderFunction, redirect} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";


export async function getAllOutgoCategories(email: any) {
  const test = await prisma.user.findMany({});

  return test;
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const categories = await getAllOutgoCategories();
  console.log(22, categories)
  return json(categories);
}
export default  function Index() {
  const data = useLoaderData();

  return <div>test {data.map(a => JSON.stringify(a))}</div>
  // return (
  //   <div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-center max-w-md:flex-col">
  //     <motion.div
  //       variants={containerVariants}
  //       initial="hidden"
  //       animate="visible"
  //       className="max-w-md:flex-[0 flex-[1] px-[1em] py-0 max-w-md:pb-[2em] max-w-md:text-center"
  //     >
  //       <motion.h1
  //         variants={textVariants}
  //         className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl"
  //       >
  //         Welcome to your new Remix Blog
  //       </motion.h1>
  //       <motion.p variants={textVariants} className="text-lg md:text-xl">
  //         Check out the codebase on{" "}
  //         <a
  //           href="https://github.com/rajeshbabu-oviva/remix-mdx-blog"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           GitHub
  //         </a>{" "}
  //         to get started.
  //       </motion.p>
  //     </motion.div>
  //
  //     <div className="mx-[1em] my-0 text-center">
  //       <motion.div {...imageLoadAnimationProps}>
  //         <picture className="block min-h-[250px]">
  //           <source
  //             srcSet="/assets/images/home-illustration.webp"
  //             media="(min-width: 600px)"
  //           />
  //           <img
  //             className="mb-[1em] w-full max-w-[550px] max-w-lg:max-w-[400px]"
  //             alt="Illustration of person reading a book"
  //             src="/assets/images/home-illustration-small.webp"
  //             width="550"
  //             height="466"
  //           />
  //         </picture>
  //       </motion.div>
  //
  //       <p className="text-left text-[0.8em] italic">
  //         Illustration by{" "}
  //         <a
  //           href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           {" "}
  //           Icons 8{" "}
  //         </a>{" "}
  //         from{" "}
  //         <a
  //           href="https://icons8.com/illustrations"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Ouch!
  //         </a>
  //       </p>
  //     </div>
  //   </div>
  // );
}
