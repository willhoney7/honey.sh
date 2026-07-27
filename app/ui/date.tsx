import { format, parseISO } from 'date-fns';
import type { Handle } from 'remix/ui';

export function Date(handle: Handle<{ dateString: string }>) {
	return () => {
		let { dateString } = handle.props;
		let date = parseISO(dateString);

		return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
	};
}

export function formatDate(dateString: string) {
	let date = parseISO(dateString);
	return format(date, 'LLLL d, yyyy');
}
