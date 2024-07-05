import type { Dispatch, SetStateAction } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from './ui/dialog'
import Image from 'next/image'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import { buttonVariants } from './ui/button'

const LoginModal = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <Dialog onOpenChange={setIsOpen} open={isOpen}>
            <DialogContent className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-full sm:max-w-md sm:mx-auto p-4 z-[9999999]'>
                <DialogHeader>
                    <div className='relative mx-auto w-24 h-24 mb-2'>
                        <Image
                            src='/cadeado.png'
                            alt='cadeado'
                            className='object-contain'
                            fill
                        />
                    </div>
                    <DialogTitle className='text-3xl text-center font-bold tracking-tight text-gray-900'>
                        Faça login para continuar
                    </DialogTitle>
                    <DialogDescription className='text-base text-center py-2'>
                        <span className='font-medium text-zinc-900'>
                            Sua configuração foi salva!
                        </span>{' '}
                        Por favor, faça login ou crie uma conta para concluir sua compra.
                    </DialogDescription>
                </DialogHeader>

                <div className='grid grid-cols-2 gap-6 divide-x divide-gray-200'>
                    <LoginLink className={buttonVariants({ variant: 'outline' })}>
                        Login
                    </LoginLink>
                    <RegisterLink className={buttonVariants({ variant: 'default' })}>
                        Cadastre-se
                    </RegisterLink>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default LoginModal
