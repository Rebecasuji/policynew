import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Flag consumers can use to check whether Supabase is configured
export const SUPABASE_CONFIGURED = Boolean(supabaseUrl && supabaseAnonKey);

// Export mutable supabase variable; assign below depending on configuration
// eslint-disable-next-line @typescript-eslint/ban-types
export let supabase: any;

// If env vars are missing, assign a lightweight stub so the app doesn't crash
if (!SUPABASE_CONFIGURED) {
	// Provide a minimal chainable stub for the common query pattern used in this app
	const stubQuery = () => ({
		order: async () => ({ data: [], error: null }),
	});

	const stubFrom = (_: string) => ({
		select: (_cols?: string) => stubQuery(),
	});

	// Minimal supabase-like object
	// Only implements the methods used in the codebase (`from().select().order()`)
	// Other calls will be undefined — this keeps the runtime safe and allows the UI to render
	// while clearly logging the missing configuration.
	supabase = {
		from: stubFrom,
	};

	console.error('[supabase] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not set. Using stubbed client.');
} else {
	supabase = createClient(supabaseUrl, supabaseAnonKey);
}