type AppointmentCardProps = { appointment: Appointment };

export const AppointmentCard = ({ appointment }: AppointmentCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold">Appointment Card</h2>
    </div>
  );
};
