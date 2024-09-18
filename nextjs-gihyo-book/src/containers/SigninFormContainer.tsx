import SigninForm from "../components/organisms/SigninForm";
import { useAuthContext } from "../contexts/AuthContext";
import { useGlobalSpinnerActionContext } from "../contexts/GlobalSpinnerContext";

interface SigninFormContainerProps {
    /**
     * サインインした時に呼ばれるイベントハンドラ
     */
    onSignin: (error?: Error) => void
}

/**
 * サインインフォームコンテナ
 */
const SigninFormContainer = ({
    onSignin,
}: SigninFormContainerProps) => {
    const { signin } = useAuthContext()
    const setGlobalSpinner = useGlobalSpinnerActionContext()
    // サインインボタンを押された時のイベントハンドラ
    const handleSign = async (username: string, password: string) => {
        try {
            // ローディングスピナーを表示する
            setGlobalSpinner(true)
            await signin(username, password)
            onSignin && onSignin()
        } catch (error: unknown) {
            if (error instanceof Error) {
                // エラーの内容を表示
                window.alert(error.message)
                onSignin && onSignin(error)
            }
        }finally{
            setGlobalSpinner(false)
        }
    }
    return <SigninForm onSignin={handleSign} />
} 

export default SigninFormContainer