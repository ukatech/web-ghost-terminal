import { jsstp_t } from "jsstp";
import { Terminal } from "xterm";

class ghost_terminal_t extends Terminal {
	#base_jsstp
	constructor() {
		this.#base_jsstp = new jsstp_t();
		this.#base_jsstp.default_info.Sender = "web-ghost-terminal";
		super();
	}

	// overrides
}