// src/components/Home.tsx
import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL_API = process.env.REACT_APP_API_URL;

interface User {
   id: string;
   name: string;
   email: string;
}

interface EditingUser extends User {
   password: string;
   password_confirmation: string;
}

const Home: React.FC = () => {
   const [user, setUser] = useState<User[]>([]);
   const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
   });
   const [editingUser, setEditingUser] = useState<EditingUser | null>(null);
   const [editFormVisible, setEditFormVisible] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      axios.get(`${URL_API}/users`)
         .then(response => {
            setUser(response.data);
         })
         .catch(error => {
            console.error('There was an error fetching the user data!', error);
         });
   }, []);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setNewUser({ ...newUser, [name]: value });
   };

   const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (editingUser) {
         const { name, value } = e.target;
         setEditingUser({ ...editingUser, [name]: value });
      }
   };

   const handleCreate = (e: React.FormEvent) => {
      e.preventDefault();
      if (newUser.password !== newUser.password_confirmation) {
         alert('Passwords do not match!');
         return;
      }
      axios.post(`${URL_API}/users`, newUser)
         .then(response => {
            console.log('User created successfully:', response.data);
            setUser([...user, response.data]);
            setNewUser({ name: '', email: '', password: '', password_confirmation: '' });
         })
         .catch(error => {
            console.error('There was an error creating the user!', error);
         });
   };

   const handleEdit = (user: User) => {
      setEditingUser({ ...user, password: '', password_confirmation: '' });
      setEditFormVisible(true);
   };

   const handleUpdate = (e: React.FormEvent) => {
      e.preventDefault();
      if (editingUser) {
         if (editingUser.password !== editingUser.password_confirmation) {
            alert('Passwords do not match!');
            return;
         }
         axios.put(`${URL_API}/users/${editingUser.id}`, editingUser)
            .then(response => {
               console.log('User updated successfully:', response.data);
               setUser(prevUsers => prevUsers.map(user => user.id === editingUser.id ? response.data : user));
               setEditingUser(null);
               setEditFormVisible(false);
               navigate('/');
            })
            .catch(error => {
               console.error('There was an error updating the user!', error);
            });
      }
   };

   const handleDelete = (id: string, name: string) => {
      if (window.confirm(`Are you sure you want to delete the user: ${name}?`)) {
         axios.delete(`${URL_API}/users/${id}`)
            .then(response => {
               console.log(`User with name: ${name} deleted successfully.`);
               setUser(prevUsers => prevUsers.filter(user => user.id !== id));
            })
            .catch(error => {
               console.error('There was an error deleting the user!', error);
            });
      }
   };

   return (
      <>
         <div className="user-cards-container">
            {user.map((userInfo: { id: string; name: string; email: string }) => (
               <div key={userInfo.id} className="user-card">
                  <h3>{userInfo.name}</h3>
                  <p>{userInfo.email}</p>
                  <div className="card-buttons">
                     <button style={{ backgroundColor: '#FFA500', float: 'left' }} onClick={() => handleEdit(userInfo)}>Edit</button>
                     <button style={{ backgroundColor: '#8B0000', float: 'right' }} onClick={() => handleDelete(userInfo.id, userInfo.name)}>Delete</button>
                  </div>
               </div>
            ))}
         </div>
         {editFormVisible && editingUser && (
            <form onSubmit={handleUpdate} className="edit-user-form">
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={editingUser.name}
                  onChange={handleEditInputChange}
                  required
               />
               <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={editingUser.email}
                  onChange={handleEditInputChange}
                  required
               />
               <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={editingUser.password}
                  onChange={handleEditInputChange}
                  required
               />
               <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  value={editingUser.password_confirmation}
                  onChange={handleEditInputChange}
                  required
               />
               <button type="submit" style={{ backgroundColor: '#4CAF50' }}>Update User</button>
            </form>
         )}
         <form onSubmit={handleCreate} className="create-user-form">
            <input
               type="text"
               name="name"
               placeholder="Name"
               value={newUser.name}
               onChange={handleInputChange}
               required
            />
            <input
               type="email"
               name="email"
               placeholder="Email"
               value={newUser.email}
               onChange={handleInputChange}
               required
            />
            <input
               type="password"
               name="password"
               placeholder="Password"
               value={newUser.password}
               onChange={handleInputChange}
               required
            />
            <input
               type="password"
               name="password_confirmation"
               placeholder="Confirm Password"
               value={newUser.password_confirmation}
               onChange={handleInputChange}
               required
            />
            <button type="submit" style={{ backgroundColor: '#4CAF50' }}>Create User</button>
         </form>
      </>
   );
};

export default Home;
