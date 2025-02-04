import styles from "./input.module.css"
import { Eye, EyeOff} from "lucide-react"
import { useState } from "react";


export function InputPassword(){
    const [isShow,setIsShow] = useState(false);
    const handlePassword = () => setIsShow(!isShow);
    return (
        <label className={styles.area}>
            <input 
            type={isShow ? "text":"password"}
             placeholder="Digite sua senha" />
            <button>
                {!isShow && <Eye size={18}/>}

                {!isShow && <EyeOff size={18)/>}
            </button>
        </label>
    );
}