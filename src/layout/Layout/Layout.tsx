import { Outlet,  NavLink, useNavigate} from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Buttton';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';
export function Layout() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const profile = useSelector((s: RootState) => s.user.profile);
	const items = useSelector((s:RootState)=> s.cart.items);

	useEffect(()=> {
		dispatch(getProfile());
	}, [dispatch]);

	const logout = () => {
		// "eyJhbGci0iJIUzI1NiIsInR5cCI6kpXVCJ9.eyJlbWFpbCI6ImFAZ21haWwuY29tIiwiaWQi0jEsImlhdCI6MTY5Mjg3MDI3OH0.C2oFbfBCEHQZ0zLbzbhLjBW2osve3ZkU7_jqmsOFx0Y"
		// localStorage.removeItem('jwt');
		dispatch(userActions.logout());
		navigate('/auth/login');
	};


	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img src='/avatar.png' alt='avatar' className={styles['avatar']} />
				<div className={styles['name']}>{profile?.name}</div>
				<div className={styles['email']}>{profile?.email}</div>
			</div>
			<div className={styles['menu']}>
				<NavLink to='/' className={({isActive}) =>cn(styles['link'], {
					[styles.active] : isActive
				})}>
					<img src='/menu-icon.svg' alt='menu' />
					Menu</NavLink>
				<NavLink to='/cart' className={({isActive}) => cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src='/cart-icon.svg' alt='cart' />
					Корзина <span className={styles['cart-count']}>{items.reduce((acc, item) => acc += item.count, 0)}</span></NavLink>
			</div>
			<Button className={styles['exit']} onClick={logout}>
				<img src='exit.svg' alt='exit' /> Выйти
			</Button>
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>;
}