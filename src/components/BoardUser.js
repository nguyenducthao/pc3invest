import { useEffect, useState } from "react"
import userService from "./services/userService";

const BoardUser = () => {
    const [content, setContent] = useState("")
    useEffect(() => {
        userService.getUserBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setContent(_content);
            }
        );
    }, []);
    return (
        <>
            <div className="container">
                <header className="jumbotron">
                    <h3>{content}</h3>
                </header>
            </div>
        </>
    )
}
export default BoardUser