import ProfileForm from './components/profileForm/ProfileForm';
import UserProperties from './components/profileForm/UserProperties';

const ProfilePage = () => {
    return (
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold mb-8">Perfil de Usuario</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ProfileForm />
            </div>
            <div className="space-y-8">
              <UserProperties />
            </div>
          </div>
        </div>
      );
};

export default ProfilePage;