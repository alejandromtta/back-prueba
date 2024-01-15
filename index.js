// const express = require("express");
// const app = express();

// const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   const htmlResponse = `
//     <html>
//       <head>
//         <title>NodeJs y Express en Vercel</title>
//       </head>
//       <body>
//         <h1>Soy un proyecto Back end en vercel</h1>
//       </body>
//     </html>
//   `;
//   res.send(htmlResponse);
// });

// app.listen(port, () => {
//   console.log(`port runing in http://localhost:${port}`);
// }); 

import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

  return (
    <div>
      ALO
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}