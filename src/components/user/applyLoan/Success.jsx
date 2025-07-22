const Success = ({ applicationId, appointmentDate }) => {
  return (
    <div>
      <h4>Application Submitted Successfully!</h4>
      <p>Your Application ID: <strong>{applicationId}</strong></p>
      <p>Your document verification appointment is on: <strong>{appointmentDate}</strong></p>
    </div>
  );
};

export default Success;