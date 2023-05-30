
import Nav from '../components/Nav';
import './globals.css';

export const metadata = {
    title: "save budget create",
    description: "Manage savings and budgets"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <div className="main">
            <div className="gradient">
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </div>
        </div>
    </body>
    </html>
  )
}

export default RootLayout;