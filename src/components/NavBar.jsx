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
       <img src="./src/assets/logo.png" className="h-10 10 w-" alt="" />
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