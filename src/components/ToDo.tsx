import type { ComponentPropsWithoutRef } from 'react';
import type { ITasks } from "../interfaces/interfaces";

const tasks: ITasks = {
    id: 1,
    name: "Заебать Илью",
    description: "Otpizdit",
    done: true
}

type buttonProps = ComponentPropsWithoutRef<"button">;

function MarkAsDone(props: buttonProps){
    return(
        <button {...props}>
            <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M15.5071 10.5245C15.8 10.2316 15.8 9.75674 15.5071 9.46384C15.2142 9.17095 14.7393 9.17095 14.4464 9.46384L10.9649 12.9454L9.55359 11.5341C9.2607 11.2412 8.78582 11.2412 8.49293 11.5341C8.20004 11.827 8.20004 12.3019 8.49294 12.5947L10.4346 14.5364C10.7275 14.8293 11.2023 14.8292 11.4952 14.5364L15.5071 10.5245Z"
                fill="green"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z"
                fill="green"
            />
            </svg>
        </button>
    );
}
function RemoveButton(props: buttonProps){
    return (
        <button {...props}>
            <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M14.7223 12.7585C14.7426 12.3448 14.4237 11.9929 14.01 11.9726C13.5963 11.9522 13.2444 12.2711 13.2241 12.6848L12.9999 17.2415C12.9796 17.6552 13.2985 18.0071 13.7122 18.0274C14.1259 18.0478 14.4778 17.7289 14.4981 17.3152L14.7223 12.7585Z"
                fill="#ef4444"
            />
            <path
                d="M9.98802 11.9726C9.5743 11.9929 9.25542 12.3448 9.27577 12.7585L9.49993 17.3152C9.52028 17.7289 9.87216 18.0478 10.2859 18.0274C10.6996 18.0071 11.0185 17.6552 10.9981 17.2415L10.774 12.6848C10.7536 12.2711 10.4017 11.9522 9.98802 11.9726Z"
                fill="#ef4444"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.249 2C9.00638 2 7.99902 3.00736 7.99902 4.25V5H5.5C4.25736 5 3.25 6.00736 3.25 7.25C3.25 8.28958 3.95503 9.16449 4.91303 9.42267L5.54076 19.8848C5.61205 21.0729 6.59642 22 7.78672 22H16.2113C17.4016 22 18.386 21.0729 18.4573 19.8848L19.085 9.42267C20.043 9.16449 20.748 8.28958 20.748 7.25C20.748 6.00736 19.7407 5 18.498 5H15.999V4.25C15.999 3.00736 14.9917 2 13.749 2H10.249ZM14.499 5V4.25C14.499 3.83579 14.1632 3.5 13.749 3.5H10.249C9.83481 3.5 9.49902 3.83579 9.49902 4.25V5H14.499ZM5.5 6.5C5.08579 6.5 4.75 6.83579 4.75 7.25C4.75 7.66421 5.08579 8 5.5 8H18.498C18.9123 8 19.248 7.66421 19.248 7.25C19.248 6.83579 18.9123 6.5 18.498 6.5H5.5ZM6.42037 9.5H17.5777L16.96 19.7949C16.9362 20.191 16.6081 20.5 16.2113 20.5H7.78672C7.38995 20.5 7.06183 20.191 7.03807 19.7949L6.42037 9.5Z"
                fill="#ef4444"
            />
            </svg>
            </button>
    );
}

function HomePage() {
    return (
        <main>
            <div className="main_item_1">
                <div className='placeHolder' key={tasks.id}>
                    <h3>{tasks.name}</h3>
                    <p>{tasks.description}</p>
                    <div className="buttons">
                        <MarkAsDone className='mark_as_done'/>
                        <RemoveButton className='remove_button'/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
