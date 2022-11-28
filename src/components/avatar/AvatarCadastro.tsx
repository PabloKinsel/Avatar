import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar, AvatarService } from "./AvatarService";


export function AvatarCadastro () {

    const navigate = useNavigate();
    //const params = useParams();   descubrir os id (:id)  que ele puxar vai ser a informação;
    //console.log('parms', params);  
    //Destruction
    const { id } = useParams();

    const [avatar, setAvatar] = useState<Avatar>({nome: '', imagem: ''});
    //const [codigo, setCodigo] = useState('')
    //const [nome, setNome] = useState('');
    //const [imagem, setImagem] = useState('');

    function valueChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event?.target;
        setAvatar({...avatar, [name]: value});
    }
    
    useEffect(() => {
        if (id) {
           let avatar = AvatarService.buscarPorId(id);
           if (avatar) {
            setAvatar(avatar);
        }
           //setCodigo (avatar && avatar?.id ? avatar?.id : ''); 
           //setNome(avatar ? avatar?.nome : '');       //esta linha e basicamnte um Else e Um If em apenas uma linha.....
           //setImagem(avatar ? avatar?.imagem : '');

           console.log('avatar', avatar);
        }
    }, []);

    function salvar(event: any) {
        event.preventDefault();

        //let avatar: Avatar = {
         //   nome: nome,
        //    imagem: imagem
       // };

       if (avatar) {
            AvatarService.salvar(avatar)
       }
        AvatarService.salvar(avatar);
        navigate('/avatar');
    }

    return (
        <>
            <Link to={'/avatar'}>Voltar</Link>    
            <h1>Página Avatar Cadastro</h1>
        <form onSubmit={salvar}>
            <div>
                <label>Nome</label> 
                <input type="text" name="nome" value={avatar.nome} onChange={valueChange}></input>
            </div>
            <div>
                <label>Avatar (imagem)</label>
                <input type="text" name="imagem" value={avatar.imagem} onChange={valueChange} ></input>  
            </div>

            <button>Salvar</button>
        </form>
        </>

    );
}
// como fazer comentario no react Tsx {/*  armazenar as informações que deseja e facha com as chave}