import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './_services/auth/auth.service';
import { ChangePasswordDto } from './_dtos/change-password/change-password.dto';
import { ChangePasswordResponseDto } from './_dtos/change-password/change-password-response.dto';
import { ForgotPasswordDto } from './_dtos/forgot-password/forgot-password.dto';
import { ForgotPasswordResponseDto } from './_dtos/forgot-password/forgot-password-response.dto';
import { ResetPasswordDto } from './_dtos/reset-password/reset-password.dto';
import { ResetPasswordResponseDto } from './_dtos/reset-password/reset-password-response.dto';
import { SignInDto } from './_dtos/sign-in/sign-in.dto';
import { SignInResponseDto } from './_dtos/sign-in/sign-in-response.dto';
import { User } from './_decorators/user.decorator';
import { ConfirmAccountResponseDto } from './_dtos/confirm-account/confirm-account-response.dto';
import { IsPublic } from './_decorators/is-public.decorator';
import {
  ApiOperation,
  ApiOkResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ConfirmAccountDto } from './_dtos/confirm-account/confirm-account.dto';
import { SignUpResponseDto } from './_dtos/sign-up/sign-up-response.dto';
import { SignUpDto } from './_dtos/sign-up/sign-up.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @ApiOperation({ description: 'Account authentication.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SignInResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @IsPublic()
  @Post('sign-in')
  async signIn(@Body() dto: SignInDto): Promise<SignInResponseDto> {
    const token = await this.service.signIn(dto);
    const response: SignInResponseDto = { token };
    return response;
  }

  @ApiOperation({ description: 'Sign-uo, account cadastre.' })
  @ApiOkResponse({
    description: 'OK.',
    type: SignUpResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @IsPublic()
  @Post('sign-up')
  async signUp(@Body() dto: SignUpDto): Promise<SignUpResponseDto> {
    const account = await this.service.signUp(dto);
    const response: SignUpResponseDto = {
      id: account?.id,
      created: !!account?.id,
    };
    return response;
  }

  @ApiOperation({ description: 'Confirm account.' })
  @ApiOkResponse({
    description: 'OK.',
    type: ConfirmAccountResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @IsPublic()
  @Post('confirm-account')
  async confirmAccount(
    @Body() dto: ConfirmAccountDto,
  ): Promise<ConfirmAccountResponseDto> {
    const account = await this.service.confirmAccount(dto);
    const response: ConfirmAccountResponseDto = { updated: !!account?.id };
    return response;
  }

  @ApiOperation({ description: 'Account cadastre.' })
  @ApiOkResponse({
    description: 'OK.',
    type: ChangePasswordResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @ApiBearerAuth()
  @Post('change-password')
  async changePassword(
    @User() user,
    @Body() dto: ChangePasswordDto,
  ): Promise<ChangePasswordResponseDto> {
    const account = await this.service.changePassword(user.id, dto);
    const response: ChangePasswordResponseDto = { updated: !!account?.id };
    return response;
  }

  @ApiOperation({
    description: 'Forgot password, request account password reset',
  })
  @ApiOkResponse({
    description: 'OK.',
    type: ForgotPasswordResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @IsPublic()
  @Post('forgot-password')
  async forgotPassword(
    @Body() dto: ForgotPasswordDto,
  ): Promise<ForgotPasswordResponseDto> {
    const token = await this.service.requestResetPassword(dto);
    const response: ForgotPasswordResponseDto = { created: !!token?.id };
    return response;
  }

  @ApiOperation({ description: 'Reset account password.' })
  @ApiOkResponse({
    description: 'OK.',
    type: ResetPasswordResponseDto,
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @IsPublic()
  @Post('reset-password')
  async resetPassword(
    @Body() dto: ResetPasswordDto,
  ): Promise<ResetPasswordResponseDto> {
    const account = await this.service.resetPassword(dto);
    const response: ResetPasswordResponseDto = { updated: !!account?.id };
    return response;
  }
}
