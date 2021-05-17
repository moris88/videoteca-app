export class Token {


    saveValue(email: string, pwd: string): void{
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('pwd', pwd);
    }

    loadEmail(): string{
        const email = sessionStorage.getItem('email');

        if (email === null){
            return '';
        }else {
            return email;
        }
    }

    loadPwd(): string{
        const pwd = sessionStorage.getItem('pwd');

        if (pwd === null){
            return '';
        }else {
            return pwd;
        }
    }

    deleteValue(): void{
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('pwd');
    }
}
