import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

// Desetruturando uma propriedade em um objeto
// Em resumo, tiramos valores de dentro da propriedade sendo possível atribuir valores
// default caso a propriedade esteja sem valor atrinuido. 
export function Avatar({ hasBorder = true, ...props}: AvatarProps) {

    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    );
}