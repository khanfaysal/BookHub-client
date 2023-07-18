
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout'
import { useAppDispatch } from './redux/hook'
import {setLoading, setUser} from './redux/features/user/userSlice'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase.config';
import { ToastContainer } from 'react-toastify';

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true))
    onAuthStateChanged(auth, (user) => {
      if(user) {
        dispatch(setUser(user.email!))
        dispatch(setLoading(false))
      } else {
        dispatch(setLoading(false))
      }
    })
  }, [dispatch])
  return (
    <div>
       {/* Toast Container */}
       <ToastContainer />
      <MainLayout />
    </div>
  )
}

export default App


