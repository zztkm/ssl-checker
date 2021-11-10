import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);

export function getBuildTime() {
	const build_time = dayjs().tz("Asia/Tokyo").format("YYYY-MM-DD HH:mm:ss");
	return build_time
}
