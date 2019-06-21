//Sign message
const signMessage = function() {
	if (!session.running) {
		session.running = true;
		let $body = $('body');
		async function main() {
			try {
				const privKey = resolvePrivKey(session.privKey).keys[0];
				const decryptPrivKey = await resolveDecKey(privKeyObj,$('.text-read-passphrase').val());
				const options = {
					message: openpgp.cleartext.fromText($('.text-write').val()),
					privateKeys: [privKeyObj]
				};
				const signMsg = await resolveSignMsg(options);
			} catch(e) {
				session.running = false;
				$body.removeClass('loading');
				lipAlert(e);
			}
		}
		main();
		/*
		openpgp.key.readArmored(session.privKey).then(data => {
			let options, cleartext, validity;
			let privKeyObj = data.keys[0];
			privKeyObj.decrypt($('.text-write-passphrase').val()).then(output => {
				options = {
					message: openpgp.cleartext.fromText($('.text-write').val()),
					privateKeys: [privKeyObj]
				};
				openpgp.sign(options).then(function(signed) {
					cleartext = signed.data.trim();
					session.running = false;
					encryptMessage(cleartext, true);
				}).catch(function(e) {
					session.running = false;
					$body.removeClass('loading');
					lipAlert('Cannot sign message. Please try again with a different message and/or keys.');
				});
			}).catch(function(e) {
				session.running = false;
				$body.removeClass('loading');
				lipAlert('The private key passphrase is incorrect.');
			});
		}).catch(function(e) {
			session.running = false;
			$body.removeClass('loading');
			lipAlert('The private key cannot be read. It may be corrupted.');
		});*/
	}
}
