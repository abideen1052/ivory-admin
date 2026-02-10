import type { Notification } from "../types";

interface NotificationListProps {
  notifications: Notification[];
  onResend: (id: number) => void;
}

const NotificationList = ({
  notifications,
  onResend,
}: NotificationListProps) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition-all duration-200 fade-in"
      style={{ animationDelay: "0.1s" }}
    >
      <h2 className="text-xl font-bold mb-6 text-slate-800">Notifications</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 font-semibold text-slate-500 border-b-2 border-slate-200 bg-slate-50 text-xs uppercase tracking-wider">
                ID
              </th>
              <th className="p-4 font-semibold text-slate-500 border-b-2 border-slate-200 bg-slate-50 text-xs uppercase tracking-wider">
                Recipient
              </th>
              <th className="p-4 font-semibold text-slate-500 border-b-2 border-slate-200 bg-slate-50 text-xs uppercase tracking-wider">
                Message
              </th>
              <th className="p-4 font-semibold text-slate-500 border-b-2 border-slate-200 bg-slate-50 text-xs uppercase tracking-wider">
                Status
              </th>
              <th className="p-4 font-semibold text-slate-500 border-b-2 border-slate-200 bg-slate-50 text-xs uppercase tracking-wider">
                Date
              </th>
              <th className="p-4 font-semibold text-slate-500 border-b-2 border-slate-200 bg-slate-50 text-xs uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr
                key={notification.id}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="p-4 border-b border-slate-200 text-slate-500 text-sm">
                  #{notification.id}
                </td>
                <td className="p-4 border-b border-slate-200 text-slate-800 text-sm font-medium">
                  {notification.recipient}
                </td>
                <td className="p-4 border-b border-slate-200 text-slate-600 text-sm max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {notification.message}
                </td>
                <td className="p-4 border-b border-slate-200">
                  <span
                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium capitalize 
                    ${
                      notification.status === "sent"
                        ? "bg-emerald-100 text-emerald-700"
                        : notification.status === "failed"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {notification.status}
                  </span>
                </td>
                <td className="p-4 border-b border-slate-200 text-slate-500 text-sm">
                  {new Date(notification.timestamp).toLocaleDateString()}
                </td>
                <td className="p-4 border-b border-slate-200">
                  <button
                    onClick={() => onResend(notification.id)}
                    className="inline-flex items-center px-3 py-1 border border-slate-300 rounded text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    title="Resend Notification"
                  >
                    Resend
                  </button>
                </td>
              </tr>
            ))}
            {notifications.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-500">
                  No notifications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotificationList;
