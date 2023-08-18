import Help from "./Help";

const HelpPage = () => {
    return(
        <div>
            <Help header={"Dealing with CORS Error"} 
                  statement={`While testing your own server at http://localhost:PORT | Make sure to include ThunderMan to avoid CORS error`}
                  code={`app.use(cors(origin: "https://thunderman.onrender.com"))`}/>
        </div>
    )
}

export default HelpPage