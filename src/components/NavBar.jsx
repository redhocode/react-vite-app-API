/* eslint-disable react/prop-types */
import {
  Navbar,
  Typography,
  Input,
} from "@material-tailwind/react";
import '../App.css'


export function NavBar( {onSearch}) {

      const search = async (q) => {
   if (q.length > 3) {
       onSearch(q)
   }
  };
  return (
    <>
    <link href="https://fonts.googleapis.com/css?family=Silkscreen:regular,700" rel="stylesheet" />
    {/* <link href="https://fonts.googleapis.com/css?family=Pixelify+Sans:regular,500,600,700" rel="stylesheet" /> */}
    <Navbar
      className="fixed max-w-screen-xl py-3 mx-auto shadow-md top-2 bg-cyan-800"
    
    >
      <div className="flex flex-wrap items-center justify-between text-red-500 gap-y-4">
             <a href="https://github.com/redhocode"
          className="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"></path>
          </svg>
        </a>
        <Typography
          as="a"
          href=""
          className="mr-4 ml-2 cursor-pointer py-1.5 text-4xl"
        >
          Re film
        </Typography>
        <div className="relative flex gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Cari film..."
            className="pr-60"
            containerProps={{
              className: "min-w-[200px]",
            }}
            onChange={({ target }) => search(target.value)}
          />
        </div>
      </div>
    </Navbar>
    </>
  );
}

export default NavBar