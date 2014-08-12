<article class="registrationform">
	<h2>Registration form</h2>
	<p></p>

	<form class="registration form-horizontal" action="#">

		<fieldset id="personalinfo">
			<legend>Personal Info</legend>

			<section class="row">
				<label for="myname" class="col col-lg-4 control-label">Name</label>
				<div class="controls col col-lg-8">
					<input type="text" name="myname" id="myname" autofocus placeholder="Last, First" required />
				</div><!-- controls -->
			</section><!-- row -->
			
			<section class="row">
				<label for="companyname" class="col col-lg-4 control-label">Company Name</label>
				<div class="controls col col-lg-8">
					<input type="text" name="companyname" id="companyname" />
				</div><!-- controls -->
			</section><!-- row -->

			<section class="row">
				<label for="myemail" class="col col-lg-4 control-label">E-Mail</label>
				<div class="controls col col-lg-8">
					<input type="email" name="myemail" id="myemail" autofocus autocomplete="off" />
				</div><!-- controls -->
			</section><!-- row -->

		</fieldset><!-- personalinfo -->


		<fieldset id="otherinfo">
			<legend>Other Info</legend>
			<section class="row">
				<label class="col col-lg-4 control-label">Request Type</label>
				<div class="controls col col-lg-8">
					<label class="radio">
						<input type="radio" name="requesttype" value="question" /> Question
					</label>
					<label class="radio">
						<input type="radio" name="requesttype" value="comment" /> Comment
					</label>
				</div><!-- controls -->
			</section><!-- row -->
				

			<section class="row">
				<label class="col col-lg-4 control-label" control-label>Subscribe</label>
				<div class="controls col col-lg-8">
					<label class="checkbox">
						<input type="checkbox" id="subscribe" name="subscribe" CHECKED value="yes" /> Would you like to subscribe to our e-mail list?
					</label>
				</div><!-- controls -->
			</section><!-- row -->

			<section class="row">
				<label class="col col-lg-4 control-label" for="reference">How did you hear about the Roux Academy Conference?</label>
				<div class="controls col col-lg-8">
					<select name="reference" id="reference">
					<option>Choose ...</option>
					<option value="friend">A friend</option>
					<option value="facebook">Facebook</option>
					<option value="twitter">Twitter</option>
				</select>
				</div><!-- controls -->
			</section><!-- row -->
	
		</fieldset><!-- otherinfo -->

		<section class="row">
			<div class="col col-lg-4 control-label"></div>
			<div class="col col-lg-8">
				<button class="btn btn-block pull-right" type="submit">Submit</button>	
			</div>
		</section>

	</form><!-- form -->
</article><!-- registrationform -->