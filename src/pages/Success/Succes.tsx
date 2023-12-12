import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Buttton';
import styles from './Succes.module.css';

export function Success() {
	const navigate = useNavigate();
	return(
		<div className={styles['success']}>
			<img src="/finish-zakaz.png" alt="pizza" />
			<div className={styles['text']}>Ваш заказ успешно оформлен !</div>
			<Button appearence="big" onClick={() => navigate('/')}>Сделать новый</Button>
		</div>
	);
}