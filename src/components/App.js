import { Routes, Route, Outlet } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<CommentList />} />
				<Route path='/post' element={<CommentBox />}></Route>
			</Routes>
			<Outlet />
		</div>
	);
}
